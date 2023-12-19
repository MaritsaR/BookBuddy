export default function Account({ user }) {
  return user ? (
    <div>
      <h3>
        {user.firstname} {user.lastname}- ({user.email})
      </h3>
    </div>
  ) : (
    <p>You must be logged in to view this page.</p>
  );
}
