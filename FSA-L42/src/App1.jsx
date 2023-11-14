import { toPng } from 'html-to-image';
import { useRef, useState } from 'react';
import './App.css';

function App1() {
	const elementRef = useRef(null);

	const htmlToImageConvert = () => {
		toPng(elementRef.current, { cacheBust: false })
			.then((dataUrl) => {
				const link = document.createElement('a');
				link.download = 'my-image-name.png';
				link.href = dataUrl;
				link.click();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const [selectedImage, setSelectedImage] = useState(null);
	const [name, setName] = useState('null');

	const handleChange = (e) => {
		setName(e.target.value);
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();
			reader.onload = (event) => {
				setSelectedImage(event.target.result);
			};
			reader.readAsDataURL(file);
		} else {
			setSelectedImage(null);
		}
	};

	return (
		<div className="App">
			<div className="invitation" ref={elementRef}>
				<h3>
					সদস্যের সমান ও অবিচ্ছেদ্য অধিকারসমূহ, সদস্যের সমান ও অবিচ্ছেদ্য
					অধিকারসমূহ. সদস্যের সমান ও অবিচ্ছেদ্য অধিকারসমূহ
				</h3>
				<img className="user-image" src={selectedImage} alt="userImage" />
				<h1 className="userName">{name}</h1>
			</div>

			<div>
				<input type="file" accept="image/*" onChange={handleImageChange} />
				<input
					type="text"
					placeholder="Enter Name"
					value={name}
					onChange={handleChange}
				/>
				{/* {selectedImage && (
					<div>
						<img
							src={selectedImage}
							alt="Selected"
							style={{ maxWidth: '100%' }}
						/>
					</div>
				)} */}
			</div>

			<button onClick={htmlToImageConvert}>Download Image</button>
		</div>
	);
}

export default App1;
