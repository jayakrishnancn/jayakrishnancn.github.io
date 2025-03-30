
mkdir -p blog/static/images/gallery/x300
mkdir -p blog/static/images/gallery/x600
mkdir -p blog/static/images/gallery/x1024
mkdir -p blog/static/images/gallery/x2048

magick mogrify -path "blog/static/images/gallery/x300/" -resize x300 -quality 85 -format webp "blog/static/images/gallery/orginal/*.jpeg"
echo "Resized to 300px"
magick mogrify -path "blog/static/images/gallery/x600/" -resize x500 -quality 90 -format webp "blog/static/images/gallery/orginal/*.jpeg"
echo "Resized to 600px"
magick mogrify -path "blog/static/images/gallery/x1024/" -resize x1024 -quality 95 -format webp "blog/static/images/gallery/orginal/*.jpeg"
echo "Resized to 1024px"
magick mogrify -path "blog/static/images/gallery/x2048/" -resize x2048 -quality 95 -format webp "blog/static/images/gallery/orginal/*.jpeg"
echo "Resized to 2048px"
