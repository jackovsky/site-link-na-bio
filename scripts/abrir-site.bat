@echo off
rem Atalho para Windows: inicia o servidor de desenvolvimento e abre o site no navegador.
cd /d "%~dp0.."
echo Iniciando o site... (feche esta janela para parar)
npm run dev
