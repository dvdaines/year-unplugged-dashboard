'use client';

import { useState, useMemo } from 'react';

const gemColorMap: Record<string, string> = {
  RED: '#ef4444',
  ORANGE: '#f97316',
  YELLOW: '#eab308',
  GREEN: '#22c55e',
  BLUE: '#3b82f6',
  PURPLE: '#a855f7',
  PINK: '#ec4899',
};

function getGemColorDot(color: string) {
  const normalizedColor = color.trim().toUpperCase();
  const hexColor = gemColorMap[normalizedColor] || '#9ca3af'; // Default gray if color not found
  
  return (
    <span
      className="inline-block ml-2 relative"
      style={{ 
        width: '8px',
        height: '8px',
      }}
      aria-label={`Gem color: ${color || 'none'}`}
    >
      {/* Diamond gem shape */}
      <span
        className="absolute inset-0"
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: hexColor,
          transform: 'rotate(45deg)',
          borderRadius: '1px',
          boxShadow: '0 0 2px rgba(0,0,0,0.3), inset 0 0 2px rgba(255,255,255,0.3)',
        }}
      />
      {/* Highlight shine */}
      <span
        className="absolute"
        style={{
          top: '2px',
          left: '2px',
          width: '3px',
          height: '3px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '50%',
          transform: 'rotate(-45deg)',
        }}
      />
    </span>
  );
}

interface TikTokFollowersListProps {
  followers: Record<string, string>[];
}

export default function TikTokFollowersList({ followers }: TikTokFollowersListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFollowers = useMemo(() => {
    if (!searchQuery.trim()) {
      return followers;
    }

    const query = searchQuery.toLowerCase().trim();
    return followers.filter(follower => {
      const username = (follower.username || '').toLowerCase();
      return username.includes(query);
    });
  }, [followers, searchQuery]);

  const sortedFollowers = useMemo(() => {
    return filteredFollowers
      .filter(follower => follower.username) // Filter out invalid rows
      .sort((a, b) => {
        const orderA = parseInt(a.order || '0', 10);
        const orderB = parseInt(b.order || '0', 10);
        return orderA - orderB;
      });
  }, [filteredFollowers]);

  return (
    <div>
      <h2 className="font-display text-2xl mb-4">TikTok</h2>
      <p className="text-muted-ink text-base sm:text-lg leading-relaxed mb-4">
        I appreciate everyone who supports this project, but this page goes out to the first 11,000! Thank you for helping me get started!
      </p>
      <p className="text-muted-ink text-sm leading-relaxed mb-6">
      Last updated: January 9, 2026 5:03pm ET. The gems are given to OGs who commented before the cutoff. Note: I had to stop monitoring comments on older videos as there were thousands.
      </p>

      {/* Search Field */}
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="search for your @"
          className="w-full px-4 py-2.5 rounded-lg border border-[rgba(30,27,22,0.08)] bg-white/60 backdrop-blur-sm text-base text-ink placeholder:text-muted-ink focus:outline-none focus:ring-2 focus:ring-[rgba(47,42,37,0.25)] focus:bg-white transition-all"
        />
      </div>

      {/* Followers List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {sortedFollowers.map((follower, index) => {
          const username = follower.username;
          const userId = follower.user_id || '';
          const profileUrl = `https://www.tiktok.com/share/user/${userId}`;
          const gemColor = follower['Gem Color'] || '';
          const order = follower.order || '';

          return (
            <div key={userId || index} className="flex items-center">
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors text-base text-muted-ink hover:underline flex items-center group"
              >
                <span className="text-ink/60 mr-2">{order}.</span>
                <span>@{username}</span>
                {gemColor && getGemColorDot(gemColor)}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

