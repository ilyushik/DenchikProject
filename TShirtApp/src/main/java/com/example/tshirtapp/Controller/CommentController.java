package com.example.tshirtapp.Controller;

import com.example.tshirtapp.DTO.AddCommentRequest;
import com.example.tshirtapp.Model.Comment;
import com.example.tshirtapp.Model.Product;
import com.example.tshirtapp.Service.CommentService;
import com.example.tshirtapp.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/comment")
public class CommentController {

    @Autowired
    private CommentService commentService;
    @Autowired
    private ProductService productService;

    @PostMapping("/addComment")
    public ResponseEntity<?> addComment(@RequestBody AddCommentRequest addCommentRequest) {
        Product product = productService.getProductById(addCommentRequest.getProductId());
        Comment comment = new Comment(product, addCommentRequest.getText());
        return ResponseEntity.ok(commentService.addComment(comment));
    }
}
