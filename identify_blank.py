import PyPDF2

pdf_path = 'public/reforma_enviar.pdf'

try:
    with open(pdf_path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        total_pages = len(reader.pages)
        print(f"Total pages: {total_pages}")
        
        blank_pages = []

        for i in range(total_pages):
            page = reader.pages[i]
            
            # Check text
            text_content = page.extract_text().strip()
            has_text = len(text_content) > 0
            
            # Check images
            # logic: if images list is not empty, it has content.
            # Note: page.images returns a list of image objects
            has_images = False
            try:
                if len(page.images) > 0:
                    has_images = True
            except:
                # Fallback if page.images is problematic, assume no images or check resources manually?
                # For safety, if error, assume has content
                has_images = False 

            if not has_text and not has_images:
                blank_pages.append(i + 1)
                
            if i % 20 == 0:
                print(f"Page {i+1}: Text={len(text_content)}, Images={has_images}")

        print(f"Identified blank pages: {blank_pages}")

except Exception as e:
    print(f"Error: {e}")
