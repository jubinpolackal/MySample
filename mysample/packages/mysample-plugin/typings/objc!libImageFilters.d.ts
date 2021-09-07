
declare class ImageFilters extends NSObject {

	static alloc(): ImageFilters; // inherited from NSObject

	static new(): ImageFilters; // inherited from NSObject

	readonly originalImage: UIImage;

	constructor(o: { image: UIImage; });

	grayScaleImage(): UIImage;

	initWithImage(image: UIImage): this;

	oldImageWithIntensity(level: number): UIImage;
}
