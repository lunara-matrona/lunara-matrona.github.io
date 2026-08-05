#!/usr/bin/env bash
set -e
if [ ! -d node_modules ]; then
  echo "Instalando dependencias..."
  npm install
fi
echo "Iniciando Lunara..."
npm run dev
