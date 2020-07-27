function phAnalyzer(ph) {
  if (ph >= 1 && ph < 7) {
    return "acidic"
  } else if (ph === 7) {
    return "neutral"
  } else if (ph >= 8 && ph <= 14) {
    return "alkaline"
  }
  return "invalid pH Value"
}
