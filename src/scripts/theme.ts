export function toggleTheme(): void {
  const root = document.documentElement;
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = theme;
  // Saving is a convenience: the toggle still works when storage is blocked.
  try {
    localStorage.setItem('theme', theme);
  } catch {}
}
