import { Button } from '@/components/ui/button';
import { CheckCheck } from 'lucide-react';
import Link from 'next/link';
import type { JSX } from 'react';

export default function StripeSuccessPage(): JSX.Element {
	return (
		<div className="h-screen">
			<div className="mx-auto mt-32 md:max-w-[50vw]">
				<CheckCheck className="mx-auto my-6 h-16 w-16 text-green-600" />
				<div className="text-center">
					<h3 className="text-center text-base font-semibold text-gray-900 md:text-2xl">
						Payment Successful!
					</h3>
					<p className="my-2 text-gray-600">
						Thank you for your purchase. We hope you enjoy it!
					</p>
					<p>Have a great day!</p>
					<Button
						asChild
						className="mt-5"
					>
						<Link href="/">Go Back</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
