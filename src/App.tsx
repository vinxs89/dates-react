import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'; 
import './App.css';
import { Card, CardUser } from './features/cards/Card';
import { Likes } from './features/likes/Likes';
import { Chat } from './features/chat/Chat';
import { Profile } from './features/profile/Profile';
import { Nav } from './features/nav/Nav';
import foto1 from './assets/foto1.png';
import foto2 from './assets/foto2.png';

function App() {
  const cardUser: CardUser = {
    id: '',
    images: [foto1, foto2]
  };

  return (
    <BrowserRouter>
      <div className="app">
          <main className="app__main">
            <Switch>
              <Route exact path="/cards">
                <Card user={cardUser} />
              </Route>
              <Route path="/likes" component={Likes} />
              <Route exact path="/chat" component={Chat} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/"><Redirect to="/cards" /></Route>
            </Switch>
          </main>
          <section className="app__nav">
            <Nav />
          </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
