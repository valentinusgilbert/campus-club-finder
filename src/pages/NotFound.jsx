import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
      <p className="text-gray-600 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Return Home
      </Link>
    </div>
  );
}

export default NotFound; 