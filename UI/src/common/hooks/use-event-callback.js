import {useRef, useCallback, useEffect, useLayoutEffect} from 'react';

const useEventCallbackBase = (useEffectHook, fn, deps) => {
	const ref = useRef(fn);

	useEffectHook(() => {
		ref.current = fn;
	}, [fn, ...deps]);

	return useCallback(
		(...args) => {
			const callback = ref.current;
			callback(...args);
		},
		[ref]
	);
};

export const useEventCallback = useEventCallbackBase.bind(
	null,
	useLayoutEffect
);

export const useEventCallbackWithUseEffect = useEventCallbackBase.bind(
	null,
	useEffect
);
