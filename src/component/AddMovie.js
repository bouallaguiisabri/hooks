import React, { useState } from 'react';
import { Form } from 'react-bootstrap';


function AddMovieForm({ Add }) {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [posterURL, setPosterURL] = useState('');
const [rating, setRating] = useState('1');

const handleSubmit = (e) => {
    e.preventDefault();
    Add({ title, description, posterURL, rating });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Poster URL</Form.Label>
        <Form.Control
          type="text"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Rating</Form.Label>
        <Form.Control
          as="select"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control type="submit" value="Add Movie" />
      </Form.Group>
    </Form>
  );
}

export default AddMovieForm;