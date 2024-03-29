import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Info from './Info';
import Episodes from './episodes/Episodes';

function Show() {
    // Gets current show
    const { show } = useSelector((state) => state.showState);

    // If show is null, redirect to home
    // if (!show) return <Redirect to="/" />;

    // Gets selected season
    const { selected, seasons } = useSelector((state) => state.seasonState);
    const hasSeasons = seasons.length > 0;
    // Format season
    const season = !hasSeasons ? null : seasons[selected - 1];

    return (
      <div>
        {!show && <Redirect to="/" />}
        {show && <Info show={show} />}
        {!hasSeasons && <p>No seasons available</p>}
        {hasSeasons && <Episodes season={season} />}
      </div>
    );
}

export default Show;
