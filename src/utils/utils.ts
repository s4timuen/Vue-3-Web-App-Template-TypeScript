function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}

function escapeRegExUrls(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export { getRandomNumber, escapeRegExUrls }
