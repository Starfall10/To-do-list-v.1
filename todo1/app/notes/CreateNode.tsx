'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateNote() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const router = useRouter();

    const create = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the default form submission

        await fetch('http://127.0.0.1:8090/api/collections/Collection1/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content
            })
        });

        setTitle('');
        setContent('');

        router.reload();
    }

    return (
        <form onSubmit={create}>
            <h3>Create a new Note</h3>
            <input 
                type="text" 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
            />
            <textarea 
                placeholder="Content" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                required 
            ></textarea>
            <button type="submit">Create Note</button>
        </form>
    );
}
