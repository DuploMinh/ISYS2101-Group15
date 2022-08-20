package com.example.isys2101group15.controller;

import com.example.isys2101group15.entity.Image;
import com.example.isys2101group15.repository.ImageRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("img")
@RequiredArgsConstructor
public class ImageController {
  private final ImageRepository imageRepository;
  @GetMapping("{name}")
  public ResponseEntity<byte[]> getByID(@PathVariable String name) {
    Optional<Image> image = imageRepository.findImageByName(name);
    byte[] content = null;
    if (image.isPresent()) {
      content=image.get().getData();
    }
    return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(content);
  }
}
