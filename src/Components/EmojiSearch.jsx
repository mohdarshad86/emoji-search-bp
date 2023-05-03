import React, { useState } from 'react';
import './style.css';

const emojiList = [
  { name: 'Grinning Face', icon: '😀' },
  { name: 'Smiling Face with Heart-Eyes', icon: '😍' },
  { name: 'Face with Tears of Joy', icon: '😂' },
  { name: 'Face with Rolling Eyes', icon: '🙄' },
  { name: 'Smiling Face with Sunglasses', icon: '😎' },
  { name: 'Thumbs Up', icon: '👍' },
  { name: 'Heart', icon: '❤️' },
  { name: 'Hugging Face', icon: '🤗' },
  { name: 'Thinking Face', icon: '🤔' },
  { name: 'Face with Medical Mask', icon: '😷' },
  { name: 'Rocket', icon: '🚀' },
  { name: 'Clapping Hands', icon: '👏' },
  { name: 'Raised Hands', icon: '🙌' },
  { name: 'Folded Hands', icon: '🙏' },
  { name: 'Fire', icon: '🔥' },
  { name: 'Money Bag', icon: '💰' },
  { name: '100 Points', icon: '💯' },
  { name: 'Red Heart', icon: '❤️‍🔥' },  
  { name: 'Face with Monocle', icon: '🧐' } 
];


const EmojiSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredEmojiList = emojiList.filter((emoji) =>
        emoji.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const Emoji = ({ name, icon }) => {
        return (
            <div>
                <span>{name} = </span>
                <span>{icon}</span>
            </div>
        );
    };

    return (
        <div className='container'>
            <h1>Emoji Search App</h1>
            <input type="text" placeholder="Search Your Fav Emoji" value={searchTerm} onChange={handleSearchInputChange} />
            {filteredEmojiList.map((emoji) => (
                <Emoji key={emoji.name} name={emoji.name} icon={emoji.icon} />
            ))}
        </div>
    );
};

export default EmojiSearch;
