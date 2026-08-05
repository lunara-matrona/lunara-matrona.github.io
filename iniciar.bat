@echo off
title Lunara Front
if not exist node_modules (
  echo Instalando dependencias...
  call npm install
  if errorlevel 1 pause & exit /b 1
)
echo Iniciando Lunara...
call npm run dev
pause
