function phAnalyzer(ph) {
  if (ph <= 3) {
    return "acidic"
  } else if (ph > 4 && ph <= 10) {
    return "neutral"
  } else if (ph <= 14) {
    return "alkaline"
  }
  return "invalid pH Value"
}
