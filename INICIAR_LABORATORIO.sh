#!/usr/bin/env sh
cd "$(dirname "$0")" || exit 1
if command -v xdg-open >/dev/null 2>&1; then
  xdg-open "$(pwd)/index.html"
elif command -v open >/dev/null 2>&1; then
  open "$(pwd)/index.html"
else
  echo "Abrí index.html con tu navegador."
fi
