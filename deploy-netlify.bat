@echo off
REM ========================================
REM Netlify Deployment Script for Windows
REM ========================================

echo.
echo ========================================
echo  Codegx Portfolio - Netlify Deployment
echo ========================================
echo.

REM Check if Netlify CLI is installed
where netlify >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Netlify CLI not found!
    echo Please install it with: npm install -g netlify-cli
    pause
    exit /b 1
)

echo [1/3] Building project...
echo.
call npm run build:netlify
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Build failed!
    pause
    exit /b 1
)

echo.
echo [2/3] Build completed successfully!
echo.

REM Check if user wants to deploy
set /p DEPLOY="Deploy to Netlify? (y/n): "
if /i not "%DEPLOY%"=="y" (
    echo Deployment cancelled.
    pause
    exit /b 0
)

echo.
echo [3/3] Deploying to Netlify...
echo.

REM Ask for deployment type
set /p PROD="Deploy to production? (y=production, n=draft): "
if /i "%PROD%"=="y" (
    echo Deploying to PRODUCTION...
    netlify deploy --prod --dir=dist/public
) else (
    echo Deploying DRAFT...
    netlify deploy --dir=dist/public
)

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo  Deployment Successful!
    echo ========================================
    echo.
) else (
    echo.
    echo [ERROR] Deployment failed!
    echo.
)

pause
