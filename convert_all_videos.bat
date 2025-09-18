@echo off
echo Converting all videos to H.264 with AAC audio...
echo.

REM Set FFmpeg path directly
set FFMPEG_PATH=C:\Users\Admin\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.0-full_build\bin\ffmpeg.exe

REM Check if ffmpeg exists
if not exist "%FFMPEG_PATH%" (
    echo FFmpeg not found at expected location: %FFMPEG_PATH%
    echo Please install FFmpeg first using: winget install ffmpeg
    pause
    exit /b 1
)

echo FFmpeg is ready. Starting conversions...
echo.

echo Converting Contact page videos...
"%FFMPEG_PATH%" -y -i public/videos/c1.mp4 -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/videos/c1_converted.mp4
"%FFMPEG_PATH%" -y -i public/videos/c2.mp4 -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/videos/c2_converted.mp4

echo Converting Testimonials videos...
"%FFMPEG_PATH%" -y -i public/videos/t1.mp4 -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/videos/t1_converted.mp4
"%FFMPEG_PATH%" -y -i public/videos/td.mp4 -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/videos/td_converted.mp4

echo Converting Services videos...
"%FFMPEG_PATH%" -y -i public/videos/v3.mp4 -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/videos/v3_converted.mp4
"%FFMPEG_PATH%" -y -i public/videos/v5.mp4 -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/videos/v5_converted.mp4

echo Converting Features video...
"%FFMPEG_PATH%" -y -i public/videos/v.mp4 -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/videos/v_converted.mp4

echo Converting BookingSection video...
"%FFMPEG_PATH%" -y -i public/videos/v4.mp4 -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/videos/v4_converted.mp4

echo Converting VideoShowreel video...
"%FFMPEG_PATH%" -y -i public/videos/v1.mp4 -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/videos/v1_converted.mp4

echo Converting Additional videos...
"%FFMPEG_PATH%" -y -i public/videos/h1.mp4 -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/videos/h1_converted.mp4
"%FFMPEG_PATH%" -y -i public/videos/vv3.mp4 -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/videos/vv3_converted.mp4

echo Converting main videos...
"%FFMPEG_PATH%" -y -i public/About.mp4 -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/About_converted.mp4
"%FFMPEG_PATH%" -y -i public/home.mp4 -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/home_converted.mp4

echo.
echo All videos converted successfully!
echo.
echo Replacing original files with converted versions...
echo.

REM Replace original files with converted versions
if exist "public/videos/c1_converted.mp4" (
    move "public/videos/c1_converted.mp4" "public/videos/c1.mp4"
    echo Replaced c1.mp4
)
if exist "public/videos/c2_converted.mp4" (
    move "public/videos/c2_converted.mp4" "public/videos/c2.mp4"
    echo Replaced c2.mp4
)
if exist "public/videos/t1_converted.mp4" (
    move "public/videos/t1_converted.mp4" "public/videos/t1.mp4"
    echo Replaced t1.mp4
)
if exist "public/videos/td_converted.mp4" (
    move "public/videos/td_converted.mp4" "public/videos/td.mp4"
    echo Replaced td.mp4
)
if exist "public/videos/v3_converted.mp4" (
    move "public/videos/v3_converted.mp4" "public/videos/v3.mp4"
    echo Replaced v3.mp4
)
if exist "public/videos/v5_converted.mp4" (
    move "public/videos/v5_converted.mp4" "public/videos/v5.mp4"
    echo Replaced v5.mp4
)
if exist "public/videos/v_converted.mp4" (
    move "public/videos/v_converted.mp4" "public/videos/v.mp4"
    echo Replaced v.mp4
)
if exist "public/videos/v4_converted.mp4" (
    move "public/videos/v4_converted.mp4" "public/videos/v4.mp4"
    echo Replaced v4.mp4
)
if exist "public/videos/v1_converted.mp4" (
    move "public/videos/v1_converted.mp4" "public/videos/v1.mp4"
    echo Replaced v1.mp4
)
if exist "public/videos/h1_converted.mp4" (
    move "public/videos/h1_converted.mp4" "public/videos/h1.mp4"
    echo Replaced h1.mp4
)
if exist "public/videos/vv3_converted.mp4" (
    move "public/videos/vv3_converted.mp4" "public/videos/vv3.mp4"
    echo Replaced vv3.mp4
)
if exist "public/About_converted.mp4" (
    move "public/About_converted.mp4" "public/About.mp4"
    echo Replaced About.mp4
)
if exist "public/home_converted.mp4" (
    move "public/home_converted.mp4" "public/home.mp4"
    echo Replaced home.mp4
)

echo.
echo All videos have been converted and replaced successfully!
echo Your videos are now optimized for web playback with H.264/AAC codecs.
echo.
pause