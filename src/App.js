import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Jumbotron, Card, Button } from "react-bootstrap";

function App() {
	return (
		<React.Fragment>
			<Jumbotron>
				<Container>
					<h1 class="text-center">Projects</h1>
					<p class="lead text-muted text-center">
						Interested in seeing more? Check out my{" "}
						<a href="https://github.com/taracdia/">github</a>.
					</p>
				</Container>
			</Jumbotron>
			<Container className="bg-light">
				<Row>
					<PortfolioPiece
						title="Cat Mewseum"
						image="images/cat-mewseum.png"
						githubLink="https://github.com/taracdia/catpage-chromeextension"
						exampleLink=""
						text="Chrome extension that uses an outside API to replace the user’s new tab with a page filled with images. The user can choose to see one image in full screen or any number of images in a grid. They can also choose the size of the images and whether to show new images or images that they have already favorited. Then their choices are saved so that the next time they open a new tab, they have things the way they like it."
					/>
					<PortfolioPiece
						title="FurnitureNow!"
						image="images/furniture-now.png"
						githubLink="https://github.com/taracdia/furniture-now"
						exampleLink=""
						text="Website created with React. Allows users to select and purchase furniture. Users can browse furniture by type and add them to their cart. Once they are ready to check out, there is a form with data validation for their payment and shipping address."
					/>
					<PortfolioPiece
						title="Tarot"
						image="images/tarot.png"
						exampleLink=""
						githubLink="https://github.com/taracdia/tarot"
						text="Learn your future! Customizable spreads with descriptions of the cards and their interpretations."
					/>
				</Row>
			</Container>
		</React.Fragment>
	);
}

function PortfolioPiece(props) {
	return (
		<Col md="4" className="py-5">
			<Card>
				<Card.Img variant="top" src={props.image} />
				<Card.Body>
					<Card.Title>
						<a href={props.exampleLink}>{props.title}</a>
					</Card.Title>
					<Card.Text>{props.text}</Card.Text>
					<a href={props.githubLink}>
						<Button variant="outline-secondary">
							View On Github
						</Button>
					</a>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default App;
