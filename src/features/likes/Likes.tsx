import { BrowserRouter, Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { ReceivedLikes } from "./ReceivedLikes";
import { SentLikes } from "./SentLikes";
import { TopPicks } from "./TopPicks";

export const Likes = () => {
    let { path, url } = useRouteMatch();

    return (
        <main>
            <nav>
                <Link to={url + '/received-likes'}><button>Ricevuti</button></Link>
                <Link to={url + '/sent-likes'}><button>Inviati</button></Link>
                <Link to={url + '/top-picks'}><button>Top Picks</button></Link>
            </nav>
            <Switch>
                <Route exact path={path + '/received-likes'} component={ReceivedLikes} />
                <Route exact path={path + '/sent-likes'} component={SentLikes} />
                <Route exact path={path + '/top-picks'} component={TopPicks} />
                <Route exact path={path}><Redirect to={url + '/received-likes'} /></Route>
            </Switch>
        </main>
    );
}