import React, { useEffect } from "react"
import { getRounds, deleteRound, addRound } from "../actions/roundActions"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function PrevRounds(props) {

    useEffect(() => {
        props.getRounds()
      }, []);

    const { rounds } = props.round;

    return (
        <div>
            <Container>
                <ListGroup>
                    <TransitionGroup >
                        {rounds.map(({ _id, playerA, course }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={() => props.deleteRound(_id)
                                            }
                                        >
                                            &times;
                                        </Button>
                                    {_id + playerA + " " + course + " "}
                                </ListGroupItem>
                                
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>


        </div>
    )

}

PrevRounds.propTypes = {
    getRounds: PropTypes.func.isRequired,
    round: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    round: state.round
})

export default connect(mapStateToProps, { getRounds, deleteRound, addRound })(PrevRounds)