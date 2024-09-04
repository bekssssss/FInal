import { useEffect, useState } from 'react';
import axios from 'axios';

const Comment = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`https://ash2521.pythonanywhere.com/comments/`, {
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI1MzU4NjM1LCJpYXQiOjE3MjUxODU4MzUsImp0aSI6ImM4YmM0Y2EyMjdjZjQyNWU4MWJiYTY5NDgzNzQyZWYwIiwidXNlcl9pZCI6Mn0.r49sPBGa7D7GfPt-Sfj9PpsPHzmMxZ8BBq6yNQu34v4`
        }
    })
        .then(response => {
            setComments(response.data.comments || []);
        })
        .catch(error => {
            console.log(error);
        });
}, []);

if (comments.length === 0) {
    return <div>Комментариев пока нет...</div>;
}

return (
    <div className="space-y-4">
        {comments.map((comment, index) => (
            <div key={index} className="w-full border text-white p-4 rounded-lg mt-4">
                <div className="flex items-start space-x-4">
                    <img
                        src={comment.avatar || "https://via.placeholder.com/150"}
                        alt="avatar"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                        <div className="flex justify-between items-center gap-8">
                            <h4 className="text-lg font-bold">{comment.user || 'Unknown'}</h4>
                            <span className="text-sm text-gray-400">{comment.created_at.slice(0, comment.created_at.indexOf("T"))}</span>
                        </div>
                        <p className="mt-2 text-gray-300 text-lg">
                            {comment.text || 'No comment text available'}
                        </p>
                    </div>
                </div>
            </div>
        ))}
    </div>
);
};

export default Comment;