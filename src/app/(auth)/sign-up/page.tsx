'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import useAuth from '../_hooks/useAuth';

const SignUpPage = () => {
  const { onSubmitSignUp } = useAuth();
  return (
    <div className="flex h-screen items-center justify-center">
      <Card>
        <h1>Sign In</h1>
        <Button onClick={onSubmitSignUp}>Sign Up</Button>
      </Card>
    </div>
  );
};

export default SignUpPage;
