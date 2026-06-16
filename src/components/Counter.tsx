import { useEffect, useRef, useState } from 'react'

type CounterPropType = {
	type: string
}

function Counter(props: CounterPropType) {
	const [counter, setCounter] = useState(0)
	const [hasStarted, setHasStarted] = useState(false)
	const counterRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const element = counterRef.current
		if (!element || hasStarted) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setHasStarted(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.3 }
		)

		observer.observe(element)

		return () => observer.disconnect()
	}, [hasStarted])

	useEffect(() => {
		if (!hasStarted) return

		let limit = 0

		switch(props.type) {
			case 't2':
				limit = 60
				break;
				
			case 't1':
				limit = 600
				break;
			case 'other':
				limit = 50
				break;
		}

		setCounter(0)

		const interval = setInterval(() => {
			setCounter((prev) => {
				if (prev >= limit) {
					clearInterval(interval)
					return prev
				}

				return prev + 1
			})
		}, 7)

		return () => clearInterval(interval)
	}, [hasStarted, props.type])

	return <div ref={counterRef}>{counter}+</div>
}

export default Counter
