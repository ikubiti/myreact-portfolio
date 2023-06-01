import React from 'react';

export default function Project({ title, deployment, github, image, color }) {
	return (
		<div className='col mb-5'>
			<div className='m-2 py-2 text-lg-center'></div>
			<div
				className={`card card-cover h-100 overflow-hidden bg-dark rounded-5 shadow-lg bg-min ${image}`}
			>
				<div className='d-flex flex-column h-100 p-5 pb-3 text-shadow-1'>
					<a
						href={`${deployment}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<h2
							className={`pt-5 mt-5 mb-4 display-6 lh-1 fw-bold ${color}`}
						>
							{' '}
							<br></br> <br></br> <br></br> <br></br>{' '}
						</h2>
					</a>
					<ul className='d-flex list-unstyled mt-auto justify-content-between'>
						<li className='me-auto'>
							<a
								href={`${github}`}
								target='_blank'
								rel='noopener noreferrer'
							>
								<img
									src={require(`../images/isoyor_icon.png`)}
									alt='app repo'
									width='32'
									height='32'
									className='rounded-circle border border-primary'
								/>
							</a>
						</li>
						<li className='d-flex  align-items-center me-3 bg-mini'>
							<svg className='bi me-2' width='1em' height='1em'>
								{' '}
							</svg>
							<a
								href={`${deployment}`}
								target='_blank'
								rel='noopener noreferrer'
							>
								<span className='font-italic'>{title}</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
