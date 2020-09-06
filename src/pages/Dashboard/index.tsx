import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
	return (
		<>
			<img src={logoImg} alt="Github Explorer" />
			<Title>Explore Repositórios no GitHub</Title>

			<Form action="">
				<input placeholder="Digite o nome do repositório" />
				<button type="submit">Pesquisar</button>
			</Form>

			<Repositories>
				<a href="teste">
					<img
						src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg"
						alt="Luigi"
					/>
					<div>
						<strong>
							rocketseat-education / gostack-template-typeorm-upload
						</strong>
						<p>
							Template para iniciar o desafio de Node.js do nível de "Iniciando
							back-end do app"
						</p>
					</div>

					<FiChevronRight size={20} />
				</a>
				<a href="teste">
					<img
						src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg"
						alt="Luigi"
					/>
					<div>
						<strong>
							rocketseat-education / gostack-template-typeorm-upload
						</strong>
						<p>
							Template para iniciar o desafio de Node.js do nível de "Iniciando
							back-end do app"
						</p>
					</div>

					<FiChevronRight size={20} />
				</a>
				<a href="teste">
					<img
						src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg"
						alt="Luigi"
					/>
					<div>
						<strong>
							rocketseat-education / gostack-template-typeorm-upload
						</strong>
						<p>
							Template para iniciar o desafio de Node.js do nível de "Iniciando
							back-end do app"
						</p>
					</div>

					<FiChevronRight size={20} />
				</a>
			</Repositories>
		</>
	);
};

export default Dashboard;
