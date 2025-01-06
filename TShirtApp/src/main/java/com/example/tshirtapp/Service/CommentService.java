package com.example.tshirtapp.Service;

import com.example.tshirtapp.Model.Comment;
import com.example.tshirtapp.Repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;

    public Comment addComment(Comment comment){
        Comment newComment = new Comment(comment.getProduct(), comment.getText());
        commentRepository.save(newComment);
        return newComment;
    }
}
