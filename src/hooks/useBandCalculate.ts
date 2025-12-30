"use client";
import { connectors } from "@/components/constants";
import { useMemo } from "react";

export default function useBandCalculate(essay: string) {
  const text = essay.trim();
  const words = useMemo(() => text.match(/\b[\w']+\b/g) || [], [text]);
  const sentences = useMemo(() => text.split(/[.!?]+/).filter(Boolean), [text]);

  const paragraphs = useMemo(
    () => text.split(/\n\s*\n/).filter(Boolean),
    [text]
  );

  const wordCount = words.length;
  const sentenceCount = sentences.length;
  const paragraphCount = paragraphs.length;

  const uniqueWords = new Set(words.map((w: string) => w.toLowerCase())).size;
  const lexicalDiversity = wordCount > 0 ? uniqueWords / wordCount : 0;

  const lexicalBand = useMemo(() => {
    if (lexicalDiversity >= 0.6) return 8;
    if (lexicalDiversity >= 0.5) return 7;
    if (lexicalDiversity >= 0.4) return 6;
    if (lexicalDiversity >= 0.3) return 5;
    return 0;
  }, [lexicalDiversity]);

  const hasConclusion = /in conclusion|to conclude|overall/i.test(text);

  const taskResponseBand = useMemo(() => {
    let band = 5;
    if (wordCount >= 250) band += 1;
    if (paragraphCount >= 4) band += 1;
    if (hasConclusion) band += 0.5;
    if (wordCount < 250) band -= 1;
    if (wordCount === 0 && paragraphCount === 0 && !hasConclusion) return 0;

    return Math.min(8, Math.max(4, band));
  }, [wordCount, paragraphCount, hasConclusion]);

  const cohesionHits = connectors.filter((c) =>
    text.toLowerCase().includes(c)
  ).length;

  const coherenceBand = useMemo(() => {
    let band = 5;

    if (paragraphCount >= 4) band += 1;
    if (cohesionHits >= 3) band += 1;
    if (sentenceCount < 5) band -= 1;
    if (paragraphCount === 0 && cohesionHits === 0 && sentenceCount === 0)
      return 0;

    return Math.min(8, Math.max(4, band));
  }, [paragraphCount, cohesionHits, sentenceCount]);

  const avgSentenceLength = sentenceCount > 0 ? wordCount / sentenceCount : 0;

  const grammarBand = useMemo(() => {
    if (avgSentenceLength === 0) return 0;
    if (avgSentenceLength >= 18 && avgSentenceLength <= 25) return 7;
    if (avgSentenceLength >= 14 && avgSentenceLength <= 30) return 6;
    if (avgSentenceLength < 14) return 5;
    return 8;
  }, [avgSentenceLength]);

  const overallBand =
    wordCount !== 0
      ? (
          (lexicalBand + taskResponseBand + coherenceBand + grammarBand) /
          4
        ).toFixed(1)
      : 0;
  return {
    wordCount,
    lexicalBand,
    taskResponseBand,
    coherenceBand,
    grammarBand,
    overallBand,
    paragraphCount,
  };
}
