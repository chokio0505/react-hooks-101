import React from 'react';

const Event = ({ event, dispatch }) => {
    const id = event.id;
    const handleClickDeleteButton = () => {
        const result = window.confirm(`イベント(id=${id})を本当に削除してもよいですか？`);
        if (result) {
            dispatch({
                type: 'DELETE_EVENT', id
            });
        }
    }
    return (
        <tr>
            <td>{event.id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td><button type='btn' className='btn btn-danger' onClick={handleClickDeleteButton}>削除</button></td>
        </tr >
    )
}

export default Event;