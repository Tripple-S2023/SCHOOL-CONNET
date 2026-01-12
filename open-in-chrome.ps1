# Build, start server in background, and open Chrome to the app URL (Windows)
$cwd = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $cwd

Write-Host "Building project..."
npm run build

Write-Host "Starting server in background..."
$nodeCmd = (Get-Command node -ErrorAction SilentlyContinue).Source
if (-not $nodeCmd) { $nodeCmd = "node" }
$proc = Start-Process -FilePath $nodeCmd -ArgumentList "dist/index.cjs" -WorkingDirectory $cwd -PassThru

Start-Sleep -Seconds 2
$port = $env:PORT
if (-not $port) { $port = 5000 }
$uri = "http://localhost:$port"

Write-Host "Opening Chrome at $uri"
try {
    Start-Process "chrome" $uri -ErrorAction Stop
} catch {
    Write-Host "Failed to open Chrome by name; opening default browser instead..."
    Start-Process $uri
}

Write-Host "Server started (PID $($proc.Id))." 
Write-Host "To stop the server, run: Stop-Process -Id $($proc.Id)"