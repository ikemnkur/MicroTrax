import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Paper, Box } from '@mui/material';
import QRCode from 'qrcode.react';

const ShareWallet = () => {
  const [username, setUsername] = useState('');
  const [shareLink, setShareLink] = useState('');

  useEffect(() => {
    // Fetch current user's username - replace with actual API call
    setUsername('currentUser');
  }, []);

  useEffect(() => {
    setShareLink(`https://yourapp.com/send?to=${username}`);
  }, [username]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    // Show a snackbar or notification that the link was copied
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Share Wallet</Typography>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ mb: 2 }}>
          <QRCode value={shareLink} size={200} />
        </Box>
        <TextField
          fullWidth
          value={shareLink}
          InputProps={{
            readOnly: true,
          }}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleCopyLink}>
          Copy Link
        </Button>
        <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
          Share this link or QR code with others to receive payments quickly.
        </Typography>
      </Paper>
    </Box>
  );
};

export default ShareWallet;