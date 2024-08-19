import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button, Avatar, Paper, Box } from '@mui/material';
import { Send as SendIcon, Favorite as FavoriteIcon, Report as ReportIcon, Message as MessageIcon } from '@mui/icons-material';

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Fetch user data - replace with actual API call
    setUser({ id: userId, username: 'exampleUser', avatar: '/path/to/avatar.jpg' });
  }, [userId]);

  const handleSendMoney = () => {
    // Navigate to send money page with this user as recipient
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Update favorite status in backend
  };

  const handleReport = () => {
    // Open report dialog or navigate to report page
  };

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <Box>
      <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar src={user.avatar} alt={user.username} sx={{ width: 100, height: 100, mr: 2 }} />
        <Typography variant="h4">{user.username}</Typography>
      </Paper>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <Button variant="contained" startIcon={<SendIcon />} onClick={handleSendMoney}>
          Send Money
        </Button>
        <Button 
          variant={isFavorite ? "contained" : "outlined"} 
          startIcon={<FavoriteIcon />} 
          onClick={handleToggleFavorite}
        >
          {isFavorite ? "Remove Favorite" : "Add Favorite"}
        </Button>
        <Button variant="outlined" startIcon={<ReportIcon />} onClick={handleReport}>
          Report
        </Button>
      </Box>
      <Button variant="text" startIcon={<MessageIcon />} href={`/messages/${userId}`}>
        Send Message
      </Button>
    </Box>
  );
};

export default UserProfile;