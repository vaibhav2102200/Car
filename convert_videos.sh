#!/bin/bash

# ==============================
# Convert Contact page videos
# ==============================
ffmpeg -i public/videos/c1.mp4 \
  -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p \
  -c:a aac -b:a 128k -movflags +faststart \
  public/videos/c1_converted.mp4

ffmpeg -i public/videos/c2.mp4 \
  -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p \
  -c:a aac -b:a 128k -movflags +faststart \
  public/videos/c2_converted.mp4

# ==============================
# Convert Testimonials videos
# ==============================
ffmpeg -i public/videos/t1.mp4 \
  -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p \
  -c:a aac -b:a 128k -movflags +faststart \
  public/videos/t1_converted.mp4

ffmpeg -i public/videos/td.mp4 \
  -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p \
  -c:a aac -b:a 128k -movflags +faststart \
  public/videos/td_converted.mp4

# ==============================
# Convert Services videos
# ==============================
ffmpeg -i public/videos/v3.mp4 \
  -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p \
  -c:a aac -b:a 128k -movflags +faststart \
  public/videos/v3_converted.mp4

ffmpeg -i public/videos/v5.mp4 \
  -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p \
  -c:a aac -b:a 128k -movflags +faststart \
  public/videos/v5_converted.mp4

# ==============================
# Convert Features video
# ==============================
ffmpeg -i public/videos/v.mp4 \
  -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p \
  -c:a aac -b:a 128k -movflags +faststart \
  public/videos/v_converted.mp4

# ==============================
# Convert BookingSection video
# ==============================
ffmpeg -i public/videos/v4.mp4 \
  -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p \
  -c:a aac -b:a 128k -movflags +faststart \
  public/videos/v4_converted.mp4

# ==============================
# Convert VideoShowreel video
# ==============================
ffmpeg -i public/videos/v1.mp4 \
  -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p \
  -c:a aac -b:a 128k -movflags +faststart \
  public/videos/v1_converted.mp4

# ==============================
# Convert Additional videos
# ==============================
ffmpeg -i public/videos/h1.mp4 \
  -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p \
  -c:a aac -b:a 128k -movflags +faststart \
  public/videos/h1_converted.mp4

ffmpeg -i public/videos/vv3.mp4 \
  -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p \
  -c:a aac -b:a 128k -movflags +faststart \
  public/videos/vv3_converted.mp4
