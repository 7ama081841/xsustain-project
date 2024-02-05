import Carousel from "react-bootstrap/Carousel";
import "./clider.css";

function Clider() {
    return (
        <div className="clider">
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://s3-alpha-sig.figma.com/img/fb21/430f/0656fe22851f40bba6618facbeffad8f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GGl9uKRwpR1fwu-0v7C0f25sbVgwqYFAIRibDMs0ZNK5ENgE1YCZylOXF7dAJ4802GsuJRj2VtO3vH0ugaJ5sgCPD2uvJqseAPynS4qS6y3D3D84VqdvMJc7~NfiI1f0eYuwo3lrmEqPD5lKX9yrhmmp5UzxOs2oztqJMzD0RclN-df2r6wePZ3mPJp3BiPcKIQbuhit0WTBQs9n9H-PgHtp05EO9cumkHhT32RMXtINo5A9nN1-VJOvotTbaCdKZJOAPWA6j0VbAiZTYiU5TWN-rY7TCGdSc6SmkSEGdZfcJQ70xxLxY5vFuWSRFJt41zjRLVGk-g2XG4B7f2f7jw__"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div>
                            <h3>TRACK MATRAK</h3>
                            <p>20.12.203</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "100%" }}>
                    <img
                        className="d-block w-100"
                        src="https://s3-alpha-sig.figma.com/img/063c/5a33/ec019b5b2ed2b0dc5f3298ca7b88b328?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o6U4hlbfsP3Yd9h6e~TdejfA1olwXyUQ-uYYpLsjJoZCkKYiWCgIT4WZ~JuZBeR858LYGmiazYbSD2l4s41hx3839LFHCe4lot1Wawjb~493xoYA86QeBR5RD0zidGfvnnYrgVWjhlRf15V6ulOYqlokytuJ~x9rsyVfjJjLFpIR2dHevdfuSBs47pcPlBUPSPk7HDrtVXTUuae2x8LsJvhgW43FqGck8fhSHH-HQduq9PCiIdnlvB58lHscVbpvjQdhdC9ZFL4KDBbw2fZVTm-kui0tRdTU8ZSoaKD4RkJObgL3S9ixhhqV2GRQBHB2-DKdUwEcDYne~fJcFIJevA__"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div>
                            <h3>TRACK MATRAK</h3>
                            <p>20.12.203</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "100%" }}>
                    <img
                        className="d-block w-100"
                        src="https://s3-alpha-sig.figma.com/img/2241/49a0/48dfabeb8b542cffa1c6b7bfe47035d5?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=he1KfoTt7v4d8~4w3nA32kBkAxBZlMO6CDVkyTriLGZaUO7FEa8LrKHEU3NeE90-yMZFY7~eZZd~nhXZc055KSbiFJVgl2XuvteeAg5PLVgo3mv788Vp5~oPnFqVEZal9~tEdKxWCncAMv2l4TI7iX6jjpi4GRgtBZ0Kn8DKx7aq-liRKKJjDgPoaOY5w3X7bB1lnSBQOktpvt90DI6k~RUteDaQkHtG8NiKa5y~7Jgzg4nmY7wBiX6ji44WO-~CxpOcGOZb8USayN3qecPX2lSQff8NDgRJl-2O9rkZVB5C5NwSYdjjz7CYeCszZNlxOdGCvIx43uOoWqeg9trrjw__"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div>
                            <h3>TRACK MATRAK</h3>
                            <p>20.12.203</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Clider;
