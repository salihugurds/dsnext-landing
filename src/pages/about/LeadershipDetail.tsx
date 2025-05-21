import { useParams } from 'react-router-dom';
import { useLeadershipMember } from '../../hooks/useAboutData';
import { DetailLayout } from './DetailLayout';
import { LoadingSpinner } from '../../components/shared';

export default function LeadershipDetail() {
  const { id } = useParams<{ id: string }>();
  const { member, loading, error } = useLeadershipMember(id || '');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error || !member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error loading leadership member</h2>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <DetailLayout
      title={member.name}
      subtitle={member.position}
      imageUrl={member.image_url || undefined}
      backLink="/about#leadership"
    >
      <div className="prose max-w-none">
        <p className="text-lg">{member.bio}</p>
        
        {member.linkedin_url && (
          <div className="mt-6">
            <a 
              href={member.linkedin_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              <span>View on LinkedIn</span>
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </DetailLayout>
  );
}
