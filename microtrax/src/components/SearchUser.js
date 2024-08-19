import React, { useState } from 'react';
import { Typography, TextField, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar, Paper, Box } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchUser = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Mock search results - replace with actual API call
    setSearchResults([
      { id: 1, username: 'user1', avatar: '/path/to/avatar1.jpg' },
      { id: 2, username: 'user2', avatar: '/path/to/avatar2.jpg' },
    ]);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Search Users</Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <form onSubmit={handleSearch}>
          <TextField
            label="Search by username"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            margin="normal"
          />
          <Button type="submit" variant="contained" startIcon={<SearchIcon />}>
            Search
          </Button>
        </form>
      </Paper>
      <List>
        {searchResults.map((user) => (
          <ListItem key={user.id} button component="a" href={`/user/${user.id}`}>
            <ListItemAvatar>
              <Avatar src={user.avatar} alt={user.username} />
            </ListItemAvatar>
            <ListItemText primary={user.username} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SearchUser;