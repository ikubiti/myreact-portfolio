import React from 'react';
import resume from '../../utils/resume_isoyor.pdf';

const proficiencies = require('../../utils/proficiencies.json');

export default function Blog() {
	return (
		<div className='container contact mb-5'>
			<h1>
				<a
					className='m-3'
					href={resume}
					target='_blank'
					rel='noreferrer'
					download
				>
					Resume
				</a>
			</h1>

			<ul className='list-group list-group-flush'>
				{proficiencies.map((proficiency, index) => {
					return (
						<li className='list-group-item' key={index}>
							{proficiency}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
