package com.kapu.cinescat.controllers;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.kapu.cinescat.models.Movie;
import com.kapu.cinescat.repo.IMovieRepo;

@CrossOrigin(origins = {"http://localhost:5173", "https://1ktzpbmr-5173.brs.devtunnels.ms"})
@RestController
public class MovieController {

    @Value("${file.upload-dir}")
    private String uploadDir;

    @Autowired
    private IMovieRepo IMovieRepo;

    @GetMapping("/movies")
    public List<Movie> getMovies() {
        return IMovieRepo.findAll();
    }

    @PostMapping("/movies/create")
    public ResponseEntity<String> addMovie(@RequestParam("title") String title,
            @RequestParam("description") String description,
            @RequestParam("genre") String genre,
            @RequestParam("image") MultipartFile image) {

        try {
            String imageName = saveImage(image);
            // Guardar la imagen

            // Crear una nueva película con los datos recibidos
            Movie movie = new Movie();
            movie.setTitle(title);
            movie.setDescription(description);
            movie.setGenre(genre);
            movie.setImage(imageName); // Guardar el nombre de la imagen

            // Guardar la película en la base de datos
            IMovieRepo.save(movie);

            return ResponseEntity.status(HttpStatus.CREATED).body("Movie created successfully!");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error saving image: " + e.getMessage());
        }
    }

    private String saveImage(MultipartFile image) throws IOException {
        if (image.isEmpty()) {
            throw new IOException("No image file uploaded");
        }
    
        // Crear un nombre único para la imagen
        String imageName = System.currentTimeMillis() + "_" + image.getOriginalFilename();
    
        // Definir la ruta donde se guardará la imagen
        Path path = Paths.get(uploadDir + File.separator + imageName);
    
        // Crear el directorio si no existe
        Files.createDirectories(path.getParent());
    
        System.out.println("Ruta de guardado de la imagen: " + path.toString());
    
        // Guardar la imagen en el directorio
        Files.write(path, image.getBytes());
    
        return imageName;
    }
}
