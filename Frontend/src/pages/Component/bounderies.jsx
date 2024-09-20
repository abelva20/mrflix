import React from 'react';
import MovieSlider from './Slide';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

// Wrap the MovieSlider component with the ErrorBoundary
const MovieSliderWithErrorBoundary = ({ category }) => (
  <ErrorBoundary>
    <MovieSlider category={category} />
  </ErrorBoundary>
);

export default MovieSliderWithErrorBoundary;