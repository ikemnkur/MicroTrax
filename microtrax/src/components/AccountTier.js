import React, { useState, useEffect } from 'react';
import { Typography, Button, Paper, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Box } from '@mui/material';

const AccountTier = () => {
  const [currentTier, setCurrentTier] = useState(1);
  const [selectedTier, setSelectedTier] = useState(1);

  useEffect(() => {
    // Fetch current user's tier - replace with actual API call
    setCurrentTier(1);
    setSelectedTier(1);
  }, []);

  const tiers = [
    { id: 1, name: 'Basic', limit: 100, fee: 0 },
    { id: 2, name: 'Standard', limit: 500, fee: 5 },
    { id: 3, name: 'Premium', limit: 1000, fee: 10 },
    { id: 4, name: 'Gold', limit: 5000, fee: 20 },
    { id: 5, name: 'Platinum', limit: 10000, fee: 35 },
    { id: 6, name: 'Diamond', limit: 50000, fee: 50 },
    { id: 7, name: 'Ultimate', limit: 100000, fee: 75 },
  ];

  const handleTierChange = () => {
    // Update user's tier - replace with actual API call
    console.log('Changing tier to', selectedTier);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Account Tier</Typography>
      <Paper sx={{ p: 2 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Select Your Account Tier</FormLabel>
          <RadioGroup
            value={selectedTier}
            onChange={(e) => setSelectedTier(Number(e.target.value))}
          >
            {tiers.map((tier) => (
              <FormControlLabel
                key={tier.id}
                value={tier.id}
                control={<Radio />}
                label={`${tier.name} - Daily Limit: $${tier.limit.toLocaleString()}, Monthly Fee: $${tier.fee}`}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Button 
          onClick={handleTierChange} 
          variant="contained" 
          color="primary" 
          sx={{ mt: 2 }}
          disabled={selectedTier === currentTier}
        >
          {selectedTier > currentTier ? 'Upgrade' : 'Downgrade'} Tier
        </Button>
      </Paper>
    </Box>
  );
};

export default AccountTier;