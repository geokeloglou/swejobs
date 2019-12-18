import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export default function Job({job}) {
    return (
        <Paper className='job'>
            <div>
                <Typography variant='h6'>{job.title}</Typography>
                <Typography variant='h7'>{job.company}</Typography>
                <Typography >{job.location}</Typography>
            </div>
            <div>
                <Typography>{job.created_at.split(' ').slice(1, 3).join(' ')}</Typography>
            </div>
        </Paper>
    );
}