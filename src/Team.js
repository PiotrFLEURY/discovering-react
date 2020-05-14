import React from 'react';

class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            team: null
        };
    }

    componentDidMount() {
        fetch("/team-api/teams/" + this.props.match.params.teamId + "/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        team: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <div>Hello team {this.props.match.params.teamId}</div>
        );
    }

}

export default Team;