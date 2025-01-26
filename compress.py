from PIL import Image
import os
folder_path = "photos/"
for filename in os.listdir(folder_path):
    if filename.endswith(('.JPG', '.jpg')):
        image_path = os.path.join(folder_path, filename)
        filename_without_ext = os.path.splitext(filename)[0]
        image = Image.open(image_path)
        image.save(f'compressed/{filename_without_ext}.webp', 'webp', optimize=True, quality=80)