import { render, screen } from '@testing-library/react';
import StarWars from './components/StarWars/index';

describe('StarWars App',()=>{
  it('Should show list of characters',()=>{
    render(<StarWars />);
    expect(screen.getBytext('Luke Skywalker')).toBeInTheDocument();
  })
})